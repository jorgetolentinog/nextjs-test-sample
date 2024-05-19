interface FileInputButtonProps {
    onChange?: (args: {
        data: string;
        name: string;
        type: string;
        size: number;
    }) => void;
}

export type FileInputButton = (props: FileInputButtonProps) => JSX.Element;
