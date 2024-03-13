import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src={'/avatar.png'}
        width={512}
        height={678}
        alt="Avatar_img"
        className="translate-z-0 w-full h-full "
      />
    </div>
  );
};

export default Avatar;
