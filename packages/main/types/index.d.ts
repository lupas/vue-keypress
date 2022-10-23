/** Temporary - until module is migrated to typescript */
export default interface KeyPress {
    keyCode: number;
    keyEvent: string;
    modifiers: string[];
    preventDefault: boolean;
    multipleKeys: string[];
    setupListeners(): void;
    addEventListener(expectedEvent: Event): void;
    eventHandler(expectedEvent: Event): void;
}