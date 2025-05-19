// 'use client'

// import { useRouter, useParams } from 'next/navigation'

// const steps = ['upload', 'city-requirements', 'compliance', 'ai-fix', 'costs']

// export default function StepPage() {
//   const router = useRouter()
//   const { step } = useParams()
//   const currentIndex = steps.indexOf(step)

//   if (currentIndex === -1) {
//     return <div>Invalid step.</div>
//   }

//   const handleNext = () => {
//     const nextStep = steps[currentIndex + 1]
//     if (nextStep) {
//       router.push(`/permit-form/${nextStep}`)
//     }
//   }

//   const renderStepContent = () => {
//     switch (step) {
//       case 'upload':
//         return (
//           <>
//             <h2 className="text-xl font-bold">Upload Drawing(s)</h2>
//             <p>Upload DWG, PDF, or CAD files here.</p>
//             {/* Add file input or FilePond component here */}
//           </>
//         )
//       case 'city-requirements':
//         return (
//           <>
//             <h2 className="text-xl font-bold">City Requirements</h2>
//             <p>Select municipality and city</p>
//             {/* Add dropdowns/select inputs */}
//           </>
//         )
//       case 'compliance':
//         return (
//           <>
//             <h2 className="text-xl font-bold">Compliance</h2>
//             <p>Compliance checks and documentation here.</p>
//             {/* Your compliance logic/form */}
//           </>
//         )
//       case 'ai-fix':
//         return (
//           <>
//             <h2 className="text-xl font-bold">AI Fix</h2>
//             <p>Upload for AI-assisted corrections.</p>
//           </>
//         )
//       case 'costs':
//         return (
//           <>
//             <h2 className="text-xl font-bold">3D & Costs</h2>
//             <p>Final estimate and 3D preview.</p>
//           </>
//         )
//       default:
//         return <p>Step not found</p>
//     }
//   }

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <div className="mb-8">
//         <div className="text-sm text-gray-600 mb-2">
//           Step {currentIndex + 1} of {steps.length}
//         </div>
//         {renderStepContent()}
//       </div>

//       {currentIndex < steps.length - 1 && (
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Next
//         </button>
//       )}
//     </div>
//   )
// }






'use client'

import { useState } from 'react'
import Step1 from '@/component/Step1'
import Step2 from '@/component/Step2'
import Step4 from '@/component/Step4'


const steps = ['upload', 'city-requirements', 'compliance', 'ai-fix']

const dummyAnalysis = `When quality counts but budget is a factor, the FP-30X is the sweet spot of Roland’s FP-X series. 
Balancing affordability with superior performance, this slim and stylish portable piano builds on 
the entry-level FP-10 with an enhanced sound engine, more powerful onboard speakers, and increased polyphony. 
Featuring Roland’s SuperNATURAL Piano technology and the same expressive 88-note PHA-4 Standard keyboard as 
the premium FP-60X, the FP-30X is the perfect home instrument for seasoned players. And with its easy-to-transport 
weight and Bluetooth connectivity for lessons and play-along audio, it’s an ideal choice for any pianist who wants 
to develop their skills or perform at small events.`




export default function PermitFormPage() {
  const [stepIndex, setStepIndex] = useState(0)

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    }
  }

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1)
    }
  }

  const renderStepContent = () => {
    const step = steps[stepIndex]
    
    switch (step) {
      case 'upload':
        return <Step1 />
      case 'city-requirements':
        return <Step2 />
      case 'compliance':
        return <p>AI-assisted corrections.</p>
      case 'ai-fix':
        return <Step4 analysis={dummyAnalysis}/>
      default:
        return <p>Step not found</p>
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div>
        <div className="text-sm text-gray-500">
          Step {stepIndex + 1} of {steps.length}: <strong>{steps[stepIndex].replace('-', ' ')}</strong>
        </div>
        {renderStepContent()}
      </div>

      <div className="flex justify-between mt-3">
        <button
          onClick={handleBack}
          disabled={stepIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={stepIndex === steps.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

