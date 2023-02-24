import { _decorator, Component, Node, UITransform, Enum } from 'cc';
const { ccclass, property } = _decorator;

enum whichkind{
    NONE = 0,
    FIT_TO_HIEGHT = 1,
    FIT_TO_WIDTH = 2
}

@ccclass('Managing')
export class Managing extends Component {
    @property({type:Node})
    Square:Node;

    @property({type:Enum(whichkind)})
    whichOne: whichkind = whichkind.NONE;
    
    // @property({type:Node})
    Rectangle1:Node;
   
    Rectangle2:Node;

    @property({type : Node })
    get frame_A():Node{
        return this.Rectangle1;
    }
    set frame_A(value:Node){
        this.Rectangle1=value;
        this.setratio();
    }


    @property(Node)
    get frame_B():Node{
        return this.Rectangle2;
    }
    set frame_B(value:Node){
        this.Rectangle2=value;
        this.setratio();
    }

    setratio()
    {
        console.log(this.Rectangle1);
        
        let squareheight = this.Square.getComponent(UITransform).height;
        let squarewidth = this.Square.getComponent(UITransform).width;
        let rectheight1 = this.Rectangle1.getComponent(UITransform).height;
        let rectwidth1 = this.Rectangle1.getComponent(UITransform).width;
        let rectheight2 = this.Rectangle2.getComponent(UITransform).height;
        let rectwidth2 = this.Rectangle2.getComponent(UITransform).width;

        console.log(this.Rectangle1);
        

        if(this.whichOne == whichkind.FIT_TO_HIEGHT){
        let aspectRatioOfRect1 = rectwidth1 / rectheight1;
        let div1 = squareheight / rectheight1;
        console.log(aspectRatioOfRect1);
        

        let aspectRatioOfRect2 = rectwidth2 / rectheight2;
        let div2 = squareheight / rectheight1;
        console.log(aspectRatioOfRect2);

        this.Rectangle1.setScale(div1,div1);
        this.Rectangle2.setScale(div2,div2);
        }

        if(this.whichOne == whichkind.FIT_TO_WIDTH){
        let aspectRatioOfRect1 = rectwidth1 / rectheight1;
        let div1 = squarewidth / rectwidth1;
        console.log(aspectRatioOfRect1);
        

        let aspectRatioOfRect2 = rectwidth2 / rectheight2;
        let div2 = squarewidth / rectwidth1;
        console.log(aspectRatioOfRect2);

        this.Rectangle1.setScale(div1,div1);
        this.Rectangle2.setScale(div2,div2);
        }
    }


    // setratio2()
    // {
    //     // let canvasheight = this.node.getComponent(UITransform).height;
    //     // let canvaswidth = this.node.getComponent(UITransform).height;
    //     let squareheight = this.Square.getComponent(UITransform).height;
    //     let squarewidth = this.Square.getComponent(UITransform).width;
    //     let rectheight1 = this.Rectangle1.getComponent(UITransform).height;
    //     let rectwidth1 = this.Rectangle1.getComponent(UITransform).width;
    //     let rectheight2 = this.Rectangle2.getComponent(UITransform).height;
    //     let rectwidth2 = this.Rectangle2.getComponent(UITransform).width;

        



    // }
    
    start() {

    }

    update(deltaTime: number) {
        
    }
}

