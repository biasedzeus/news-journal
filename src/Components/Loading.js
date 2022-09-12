import React from 'react'
import { motion } from 'framer-motion'

const loadingVariants ={
    initial:{
        x:[20,-20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25
            }


        }
    }
}

const Loading = () => {
    return (
        <>
      <motion.div 
        className="Loading"
        variants={loadingVariants}
        animate="initial"
      >
        

      </motion.div>
      </>
    );
}

export default Loading;
