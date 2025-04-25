export class StringUtilities {
    /**
     * Appends the current timestamp to the given string.
     * @param str
     * @returns
     */
    public appendTimestamp(str: string): string {
        // Get the current timestamp as a string
        var timeStamp = String(Date.now());
        
        // Concatenate the input string with the timestamp
        var strConc = str.concat(timeStamp);
        
        // Return the concatenated string
        return String(strConc);
    }
}
