import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Zone extends Object implements AutoCloseable {
    constructor(arg0: number)
    // private id: number;
    addText(arg0: string): Zone;
    addValue(arg0: number): Zone;
    close(): void;
    setColor(arg0: number): Zone;
}