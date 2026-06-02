import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { LockIconButton } from '../../../../../../net/minecraft/client/gui/components/LockIconButton.d.ts'
import type { LayoutElement } from '../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Difficulty } from '../../../../../../net/minecraft/world/Difficulty.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class DifficultyButtons extends Record {
    static create(paramminecraft: Minecraft, paramlevel: Level, paramscreen: Screen): DifficultyButtons;
    constructor(layout: LayoutElement, difficultyButton: CycleButton<Difficulty>, lockButton: LockIconButton, level: Level)
    // private difficultyButton: CycleButton<Difficulty>;
    // private layout: LayoutElement;
    // private level: Level;
    // private lockButton: LockIconButton;
    difficultyButton(): CycleButton<Difficulty>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layout(): LayoutElement;
    level(): Level;
    lockButton(): LockIconButton;
    refresh(minecraft: Minecraft): void;
    toString(): string;
}