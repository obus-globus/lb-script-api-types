import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { TinyRemapper$MrjState } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$MrjState.d.ts'
import type { TrMember$MemberType } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
export class TinyRemapper$Propagation extends Object implements Runnable {
    constructor(null_: TinyRemapper$Propagation, arg2: TrMember$MemberType, arg3: Map$Entry<string, string>[])
    // private state: TinyRemapper$MrjState;
    // private tasks: Map$Entry<string, string>[];
    // private type: TrMember$MemberType;
    run(): void;
}