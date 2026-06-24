import type { PendingInvite } from '../../../../../com/mojang/realmsclient/dto/PendingInvite.d.ts'
import type { RealmsPendingInvitesScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsPendingInvitesScreen.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Button$CreateNarration } from '../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { ContainerObjectSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList$Entry.d.ts'
import type { SpriteIconButton } from '../../../../../net/minecraft/client/gui/components/SpriteIconButton.d.ts'
import type { StringWidget } from '../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
export class RealmsPendingInvitesScreen$Entry extends ContainerObjectSelectionList$Entry<RealmsPendingInvitesScreen$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsPendingInvitesScreen, pendingInvite: PendingInvite)
    // private acceptButton: SpriteIconButton;
    // private children: AbstractWidget[];
    // private inviteDate: StringWidget;
    // private pendingInvite: PendingInvite;
    // private realmName: StringWidget;
    // private realmOwnerName: StringWidget;
    // private rejectButton: SpriteIconButton;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    // private getCreateNarration(pendingInvite: PendingInvite): Button$CreateNarration;
    // private handleInvitation(accept: boolean): void;
    narratables(): NarratableEntry[];
}