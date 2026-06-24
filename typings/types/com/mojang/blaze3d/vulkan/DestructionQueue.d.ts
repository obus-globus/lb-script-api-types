import type { DestructionQueue$Destroyer } from '../../../../com/mojang/blaze3d/vulkan/DestructionQueue$Destroyer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DestructionQueue<T extends unknown> extends Object implements AutoCloseable {
    constructor(internalQueueCount: number, destroyCallback: DestructionQueue$Destroyer<T>)
    // private currentDestructionQueueIndex: number;
    // private destroyCallback: DestructionQueue$Destroyer<T>;
    // private destructionQueues: T[][];
    add(t: T): void;
    close(): void;
    rotate(): boolean;
}