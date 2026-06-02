import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface PinnedObject extends AutoCloseable, Object{
    addressOfArrayElement<T extends PointerBase>(index: number): T;
    addressOfObject(): PointerBase;
    close(): void;
    getObject(): Object;
}