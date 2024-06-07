import { useCameraPermission } from "react-native-vision-camera"


export default function Test(){
    const {hasPermission, requestPermission} = useCameraPermission()
    
    return (
        null
      )
}
