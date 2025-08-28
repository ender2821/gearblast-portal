import LoadingSpinnerIcon from "../public/loading-spinner.svg";

export default function LoadingSpinner() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 z-10">
      <LoadingSpinnerIcon className="w-12 h-12" />
    </div>
  );
}
