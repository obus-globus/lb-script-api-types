import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ComponentOrientation extends Object implements Serializable {
    static LEFT_TO_RIGHT: ComponentOrientation;
    static RIGHT_TO_LEFT: ComponentOrientation;
    static UNKNOWN: ComponentOrientation;
    static getOrientation(paramarg0: Locale): ComponentOrientation;
    static getOrientation(paramarg0: ResourceBundle): ComponentOrientation;
    private constructor(arg0: number)
    // private orientation: number;
    isHorizontal(): boolean;
    isLeftToRight(): boolean;
}