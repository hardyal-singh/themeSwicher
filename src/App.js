

import Btn from "./Compo/Btn"
import Card from "./Compo/Card"
import {ContextProvider} from "./Context/contextProvider"

 function App() {
  
  
return (<ContextProvider >
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     <Btn/>  
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ContextProvider>

  )

 }


export default App;
