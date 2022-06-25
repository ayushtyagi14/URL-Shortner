import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        setShortenLink(res.data.result.full_short_link);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p class="text-black ml-3">Loading...</p>;
  }
  if (error) {
    return <p class="text-black ml-3">Something went wrong :(</p>;
  }

  return (
    <>
      {shortenLink && (
        <div class="flex items-center justify-between py-2 px-4">
          <p class="text-white mb-5 mr-10 border py-2 px-4">{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <div class="flex items-center justify-center mb-5 px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-400 hover:bg-teal-500 md:py-2 md:text-lg md:px-10 cursor-pointer">
              <button onClick={copied ? "" : ""}>Copy to Clipboard</button>
            </div>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
