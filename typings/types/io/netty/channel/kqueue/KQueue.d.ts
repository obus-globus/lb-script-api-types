import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class KQueue extends Object {
    static ensureAvailability(): void;
    static isAvailable(): boolean;
    static isTcpFastOpenClientSideAvailable(): boolean;
    static isTcpFastOpenServerSideAvailable(): boolean;
    static unavailabilityCause(): Throwable;
    private constructor()
}