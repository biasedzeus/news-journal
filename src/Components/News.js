// import React,{useState} from 'react'
// import {motion,AnimateSharedLayout,AnimatePresence} from "framer-motion"

// function News() {
//     const [selectedId, setSelectedId] = useState(null)

//   const  items =[
//         {
//             name:"bhanu"
//             ,type:"B+"
//         }
//     ]

//     return (
//         <div>
       
//  <AnimateSharedLayout type="crossfade">
//    {items.map(item => (
//      <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//        <motion.h5>{item.subtitle}</motion.h5>
//        <motion.h2>{item.title}</motion.h2>
//      </motion.div>
//    ))}
  
//    <AnimatePresence>
//      {selectedId && (
//        <motion.div layoutId={selectedId}>
//          <motion.h5>{item.subtitle}</motion.h5>
//          <motion.h2>{item.title}</motion.h2>
//          <motion.button onClick={() => setSelectedId(null)} />
//        </motion.div>
//      )}
//    </AnimatePresence>
//  </AnimateSharedLayout>
            
//         </div>
//     )
// }

// export default News
