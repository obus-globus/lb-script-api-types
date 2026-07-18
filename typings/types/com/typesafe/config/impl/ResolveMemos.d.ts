import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { BadMap } from '../../../../com/typesafe/config/impl/BadMap.d.ts'
import type { MemoKey } from '../../../../com/typesafe/config/impl/MemoKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResolveMemos extends Object {
    constructor()
    // private memos: BadMap<MemoKey, AbstractConfigValue>;
    get(arg0: MemoKey): AbstractConfigValue;
    put(arg0: MemoKey, arg1: AbstractConfigValue): ResolveMemos;
}