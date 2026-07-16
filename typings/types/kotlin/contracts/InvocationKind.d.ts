import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class InvocationKind extends Enum<InvocationKind> implements Serializable {
    static AT_LEAST_ONCE: InvocationKind;
    static AT_MOST_ONCE: InvocationKind;
    static EXACTLY_ONCE: InvocationKind;
    static UNKNOWN: InvocationKind;
    static getEntries(): InvocationKind[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InvocationKind;
    static values(): InvocationKind[];
    private constructor()
    name(): "AT_MOST_ONCE" | "AT_LEAST_ONCE" | "EXACTLY_ONCE" | "UNKNOWN";
}