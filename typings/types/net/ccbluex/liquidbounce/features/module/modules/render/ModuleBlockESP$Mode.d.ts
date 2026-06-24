import type { GpuBufferSlice } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AtomicBoolean } from '../../../../../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Matrix4f } from '../../../../../../../org/joml/Matrix4f.d.ts'
export class ModuleBlockESP$Mode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    // private dirtyFlag: AtomicBoolean;
    // private /*not mapped: */ getDirtyFlag(): AtomicBoolean;
    readonly parent: ModeValueGroup<ModuleBlockESP$Mode>;
    // private useColor: boolean;
    // private /*not mapped: */ getUseColor(): boolean;
    enable(): void;
    protected getDynamicTransformsUniform(modelView: Matrix4f | null, colorModulatorAlpha: number): GpuBufferSlice;
    markDirty(): void;
}