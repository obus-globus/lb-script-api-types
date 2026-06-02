import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
export class StateUpdateNotifiers extends Object {
    static bindTextureNotifier: ValueUpdateNotifier;
    static blendFuncNotifier: ValueUpdateNotifier;
    static fallbackEntityNotifier: ValueUpdateNotifier;
    static fogEndNotifier: ValueUpdateNotifier;
    static fogStartNotifier: ValueUpdateNotifier;
    static normalTextureChangeNotifier: ValueUpdateNotifier;
    static phaseChangeNotifier: ValueUpdateNotifier;
    static specularTextureChangeNotifier: ValueUpdateNotifier;
    constructor()
}