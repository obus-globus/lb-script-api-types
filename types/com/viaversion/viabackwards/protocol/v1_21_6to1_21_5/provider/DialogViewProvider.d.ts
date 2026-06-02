import type { Dialog } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Dialog.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DialogViewProvider extends Provider, Object{
    closeDialog(arg0: UserConnection): void;
    openDialog(arg0: UserConnection, arg1: Dialog): void;
}