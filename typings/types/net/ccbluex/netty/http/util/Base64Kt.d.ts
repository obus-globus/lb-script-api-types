import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Base64Kt extends Object {
    static readAsBase64(self: Path): string;
    static readImageAsBase64(path: Path): string;
}