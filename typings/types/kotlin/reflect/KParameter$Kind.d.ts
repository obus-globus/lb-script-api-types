import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class KParameter$Kind extends Enum<KParameter$Kind> implements Serializable {
    static CONTEXT: KParameter$Kind;
    static EXTENSION_RECEIVER: KParameter$Kind;
    static INSTANCE: KParameter$Kind;
    static VALUE: KParameter$Kind;
    static getEntries(): KParameter$Kind[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KParameter$Kind;
    static values(): KParameter$Kind[];
    private constructor()
    name(): "INSTANCE" | "CONTEXT" | "EXTENSION_RECEIVER" | "VALUE";
}