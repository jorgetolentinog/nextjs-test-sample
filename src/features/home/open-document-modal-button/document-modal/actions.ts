"use server";

export const sendAction = async (data: {
    fileContent: string;
}) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("sendAction", data);
    return null;
}
