import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import ArtistListLooping from "./ArtistListLooping";

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const MenuModal = (props: Props) => {
  return (
    <>
      <Modal
        scrollBehavior="outside"
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
      >
        <ModalContent className="bg-[#1a2238]">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className=" w-full text-center capitalize text-lg tracking-wider">
                  top artists of 2023
                </h2>
              </ModalHeader>
              <ModalBody>
                <ArtistListLooping />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuModal;
