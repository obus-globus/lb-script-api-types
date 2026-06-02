import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FrameDescriptor$Builder extends Object {
    private constructor(capacity: number)
    // private defaultValue: Object;
    // private descriptorInfo: Object;
    // private infos: Object[];
    // private names: Object[];
    // private size: number;
    // private tags: number[];
    // private useSlotKinds: boolean;
    addSlot(kind: FrameSlotKind, name: Object, info: Object): number;
    addSlots(count: number): number;
    addSlots(count: number, kind: FrameSlotKind): number;
    build(): FrameDescriptor;
    defaultValue(newDefaultValue: Object): FrameDescriptor$Builder;
    defaultValueIllegal(): FrameDescriptor$Builder;
    // private ensureCapacity(count: number): void;
    info(info: Object): FrameDescriptor$Builder;
    useSlotKinds(b: boolean): FrameDescriptor$Builder;
    // private validateTags(): void;
}