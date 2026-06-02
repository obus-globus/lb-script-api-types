import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
export interface RenderPassInterface extends Object{
    iris$getCustomPass(): CustomPass;
    iris$setCustomPass(arg0: CustomPass): void;
}