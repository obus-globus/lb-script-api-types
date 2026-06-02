import type { Object } from '../../../java/lang/Object.d.ts'
import type { Mover } from '../../../kotlinx/io/files/Mover.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export class NioMover extends Object implements Mover {
    constructor()
    move(source: Path, destination: Path): void;
}