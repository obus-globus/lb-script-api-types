import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Unix extends Object {
    static ensureAvailability(): void;
    static isAvailable(): boolean;
    static registerInternal(paramarg0: () => void): void;
    static unavailabilityCause(): Throwable;
    private constructor()
}