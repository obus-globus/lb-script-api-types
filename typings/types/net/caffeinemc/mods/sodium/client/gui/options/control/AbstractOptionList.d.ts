import type { AbstractScrollable } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractScrollable.d.ts'
import type { ControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/ControlElement.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
export abstract class AbstractOptionList extends AbstractScrollable {
    constructor(arg0: Dim2i)
    readonly controls: ControlElement[];
    getControls(): ControlElement[];
}