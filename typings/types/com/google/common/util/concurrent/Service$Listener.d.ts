import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class Service$Listener extends Object {
    constructor()
    failed(from: Service$State, failure: Throwable): void;
    running(): void;
    starting(): void;
    stopping(from: Service$State): void;
    terminated(from: Service$State): void;
}