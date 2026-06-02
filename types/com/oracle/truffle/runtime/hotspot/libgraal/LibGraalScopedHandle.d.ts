import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalScopedHandle extends Object implements AutoCloseable {
    constructor(handle: number, handleType: Class<Object>)
    // private handle: number;
    // private handleType: Class<Object>;
    close(): void;
    getHandle(): number;
    toString(): string;
}