const TypingText = ({ text, className = "" }) => {
  return (
    <h1 className={`animate-typing ${className}`}>
      {text}
    </h1>
  );
};

export default TypingText;
