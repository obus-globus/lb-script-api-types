import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { InputControlHandler } from '../../../../../../../net/minecraft/client/gui/screens/dialog/input/InputControlHandler.d.ts'
import type { InputControlHandler$Output } from '../../../../../../../net/minecraft/client/gui/screens/dialog/input/InputControlHandler$Output.d.ts'
import type { Action$ValueGetter } from '../../../../../../../net/minecraft/server/dialog/action/Action$ValueGetter.d.ts'
import type { BooleanInput } from '../../../../../../../net/minecraft/server/dialog/input/BooleanInput.d.ts'
export class InputControlHandlers$BooleanHandler extends Object implements InputControlHandler<BooleanInput> {
    private constructor()
    addControl(input: BooleanInput, screen: Screen, output: (param0: LayoutElement, param1: Action$ValueGetter) => void): void;
}