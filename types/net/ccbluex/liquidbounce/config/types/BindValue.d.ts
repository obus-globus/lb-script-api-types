import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { InputBind } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
export class BindValue extends Value<InputBind> {
    constructor(name: string, aliases: string[], defaultValue: InputBind)
    setByString(string: string): void;
}