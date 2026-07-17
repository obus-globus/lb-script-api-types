import type { JavaMap } from '../../../JavaMap.d.ts'
import type { TextAttribute } from '../../../java/awt/font/TextAttribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class InputMethodHighlight extends Object {
    static CONVERTED_TEXT: number;
    static RAW_TEXT: number;
    static SELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    static SELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
    static UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: InputMethodHighlight;
    static UNSELECTED_RAW_TEXT_HIGHLIGHT: InputMethodHighlight;
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: boolean, arg1: number, arg2: number)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: JavaMap<TextAttribute, Object | null>)
    readonly selected: boolean;
    readonly state: number;
    readonly style: JavaMap<TextAttribute, Object | null>;
    readonly variation: number;
    getState(): number;
    getStyle(): JavaMap<TextAttribute, Object | null>;
    getVariation(): number;
    isSelected(): boolean;
}