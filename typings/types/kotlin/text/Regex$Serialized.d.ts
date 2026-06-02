import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Regex$Serialized$Companion } from '../../kotlin/text/Regex$Serialized$Companion.d.ts'
export class Regex$Serialized extends Object implements Serializable {
    static Companion: Regex$Serialized$Companion;
    constructor(pattern: string, flags: number)
    readonly flags: number;
    readonly pattern: string;
    // private readResolve(): Object;
}