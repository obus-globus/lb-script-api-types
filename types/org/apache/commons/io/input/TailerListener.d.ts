import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tailer } from '../../../../../org/apache/commons/io/input/Tailer.d.ts'
export interface TailerListener extends Object{
    fileNotFound(): void;
    fileRotated(): void;
    handle(arg0: Exception): void;
    handle(arg0: string): void;
    init(arg0: Tailer): void;
}