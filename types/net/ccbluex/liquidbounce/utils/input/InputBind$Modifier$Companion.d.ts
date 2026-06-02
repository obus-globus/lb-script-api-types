import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InputBind$Modifier } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier.d.ts'
export class InputBind$Modifier$Companion extends Object {
    // private KEY_CODE_LOOKUP: Int2ReferenceMap<InputBind$Modifier>;
    // private LOOKUP_TABLE: { [key: string]: InputBind$Modifier };
    fromRawValue(modifiers: number): InputBind$Modifier[];
    of(keyCode: number): InputBind$Modifier | null;
    of(string: string | null): InputBind$Modifier | null;
}