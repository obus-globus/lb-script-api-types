import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Button$Builder } from '../../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { LayoutElement } from '../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { DialogScreen } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { ClickEvent } from '../../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ActionButton } from '../../../../../../net/minecraft/server/dialog/ActionButton.d.ts'
import type { Input } from '../../../../../../net/minecraft/server/dialog/Input.d.ts'
import type { Action } from '../../../../../../net/minecraft/server/dialog/action/Action.d.ts'
import type { Action$ValueGetter } from '../../../../../../net/minecraft/server/dialog/action/Action$ValueGetter.d.ts'
export class DialogControlSet extends Object {
    static EMPTY_ACTION: () => Object | null;
    constructor(screen: DialogScreen<Object>)
    // private screen: DialogScreen<Object>;
    // private valueGetters: { [key: string]: Action$ValueGetter };
    addInput(data: Input, output: (param0: LayoutElement) => void): void;
    bindAction(maybeAction: Optional<Action>): () => Optional<ClickEvent>;
    createActionButton(actionButton: ActionButton): Button$Builder;
}