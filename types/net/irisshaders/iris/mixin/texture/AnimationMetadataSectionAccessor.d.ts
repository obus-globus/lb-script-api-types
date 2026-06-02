import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AnimationMetadataSectionAccessor extends Object{
    getFrameHeight(): Optional<number>;
    getFrameWidth(): Optional<number>;
    setFrameHeight(arg0: Optional<number>): void;
    setFrameWidth(arg0: Optional<number>): void;
}