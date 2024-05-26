import { useState } from "react";

const useExpand = () => {
    const [isExpand, setExpand] = useState(false);

    const handleTaggle = () => {
        setExpand(!isExpand);
      };
    
    return { isExpand, handleTaggle };
}

export default useExpand;