import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
export class GuestEngine extends Object {
    constructor(engine: Engine)
    // private engine: Engine;
    // private engineHandle: number;
    getHandle(): number;
    setHandle(handle: number): void;
}