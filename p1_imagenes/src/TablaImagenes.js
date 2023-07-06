
function TablaImagenes ({prop}){
    //const imagenes = ["p1/p1_imagenes/public/images/images/ade.png","p1\p1_imagenes\public\images\images\atr.png","p1\p1_imagenes\public\images\images\der.png","p1\p1_imagenes\public\images\images\izq.png"];
    return (
        <table>
            <tr>
                <td> <img src={prop[0]}></img></td>
                <td> <img src={prop[1]}></img></td>
                <td> <img src={prop[2]}></img></td>
                <td> <img src={prop[3]}></img></td>
                
            </tr>
            
            
        </table>
        
    );
}
export default TablaImagenes;