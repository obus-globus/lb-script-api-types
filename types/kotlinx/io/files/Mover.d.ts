import type { Object } from '../../../java/lang/Object.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export interface Mover extends Object{
    move(source: Path, destination: Path): void;
}