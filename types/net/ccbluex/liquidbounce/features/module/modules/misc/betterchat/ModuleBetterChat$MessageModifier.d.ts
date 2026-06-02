import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleBetterChat$MessageModifier extends ToggleableValueGroup {
    protected constructor(name: string, enabled: boolean)
    getMessage(content: string): string;
    modifyMessage(content: string): string;
}