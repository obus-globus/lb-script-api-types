import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class ToStringStyle$NoFieldNameToStringStyle extends ToStringStyle {
    static DEFAULT_STYLE: ToStringStyle;
    static JSON_STYLE: ToStringStyle;
    static MULTI_LINE_STYLE: ToStringStyle;
    static NO_CLASS_NAME_STYLE: ToStringStyle;
    static NO_FIELD_NAMES_STYLE: ToStringStyle;
    static SHORT_PREFIX_STYLE: ToStringStyle;
    static SIMPLE_STYLE: ToStringStyle;
    static getRegistry(): JavaMap<Object, Object>;
    constructor()
    // private readResolve(): Object;
}