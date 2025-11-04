import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestion from './Suggestion'

 function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20'><Sidebar /></div>
      <div className='w-50 '><Feed /></div>
      <div className='w-30'><Suggestion /></div>
    </div>
//     <div className="container-fluid mt-4">
//   <div className="row">

//     <div className="col-2">
//       <Sidebar />
//     </div>

//     <div className="col-6">
//       <Feed />
//     </div>

//     <div className="col-3">
//       <div className="sticky-top" style={{ top:"80px" }}>
//          <Suggestion />
//       </div>
//     </div>

//   </div>
// </div>

  )
}

export default App
