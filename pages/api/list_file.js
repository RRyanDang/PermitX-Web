



import { 
    BlobServiceClient, 
    generateBlobSASQueryParameters, 
    BlobSASPermissions,
    SASProtocol,
    StorageSharedKeyCredential
} from "@azure/storage-blob";

const accountName = 'Your account name'
const accountKey = 'Your account key'
const containerName = 'your account container name'

export default async function handler(req, res) {
    try{
        const creds = new StorageSharedKeyCredential(accountName, accountKey)
        const blobServiceClient = new BlobServiceClient(
            `https://${accountName}.blob.core.windows.net`, creds
        )

        const containerClient = blobServiceClient.getContainerClient(containerName)

        const blobList = []
        for await (const blob of containerClient.listBlobsFlat({prefix: 'temp/'})) {
            
            if (blob.name.endsWith('.pdf')) {
                const sasToken = generateBlobSASQueryParameters({
                    containerName, 
                    blob: blob.name,
                    permissions: BlobSASPermissions.parse('r'),
                    expiresOn: new Date(Date.now() + 60 * 60 *1000),
                    protocol: SASProtocol.Https,
                }, creds).toString()

                const sasUrl = `https://${accountName}.blob.core.windows.net/${containerName}/${blob.name}?${sasToken}`

                blobList.push({
                    id: blobList.length,
                    name: blob.name,
                    contentType: blob.properties.contentType,
                    url: sasUrl
                })
            }
        }
        console.log(blobList)
        res.status(200).json(blobList)
    } catch (error){
        console.error('Blob fetch error:',error)
        res.status(500).json({error: 'Failed to generate SAS URLs'})
    }
}