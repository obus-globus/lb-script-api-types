import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Position } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/Position.d.ts'
export interface LocationInfo extends Object{
    getFilePath(): string;
    getPosition(): Position;
}