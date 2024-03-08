export function TextArea() {
    return (
        <textarea
            style={{ resize: 'none' }}
            placeholder='Message'
            className='text-lg focus:outline-none py-1 px-[6px] w-full h-32'
        />
    );
}
